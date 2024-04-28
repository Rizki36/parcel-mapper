type Node = number;
type FromTo = [Node, Node]; // [from, to]
type Path = FromTo[];
type TotalDistance = number;
type PathAndTotalDistance = [Path, TotalDistance];
type Pheromone = number[][]; // n x n matrix
type Distances = number[][]; // n x n matrix

class AntColony {
  private distances: Distances;
  private pheromone: Pheromone;
  private all_inds: number[];
  private n_ants: number;
  private n_best: number;
  private n_iterations: number;
  private decay: number;
  private alpha: number;
  private beta: number;

  constructor(
    distances: Distances,
    n_ants: number,
    n_best: number,
    n_iterations: number,
    decay: number,
    alpha: number,
    beta: number
  ) {
    this.distances = distances;
    this.pheromone = Array.from({ length: distances.length }, () =>
      Array.from({ length: distances.length }, () => 1 / distances.length)
    );
    this.all_inds = Array.from({ length: distances.length }, (_, i) => i);
    this.n_ants = n_ants;
    this.n_best = n_best;
    this.n_iterations = n_iterations;
    this.decay = decay;
    this.alpha = alpha;
    this.beta = beta;
  }

  run() {
    // jalur terpendek di pada suatu x iterasi
    let shortest_path: PathAndTotalDistance;

    // jalur terpendek di semua iterasi
    let all_time_shortest_path: PathAndTotalDistance | null = null;

    for (let i = 0; i < this.n_iterations; i++) {
      // mendapatkan semua jalur yang diambil oleh semut
      const all_paths = this.generate_all_paths();

      // mengupdate pheromone dengan decay atau penguapan pheromone
      this.pheromone = this.pheromone.map((row) =>
        row.map((p) => p * this.decay)
      );

      // mengupdate pheromone berdasarkan jalur yang diambil oleh semut
      // pheromone yang diupdate hanya sebanyak n_best
      // (jalur terpendek yang diambil oleh semut)
      this.spread_pheronome(all_paths, this.n_best);

      // mendapatkan jalur terpendek pada iterasi ini
      shortest_path = all_paths.sort((a, b) => a[1] - b[1])[0];

      // membandingkan jalur terpendek pada iterasi ini dengan jalur terpendek sebelumnya
      // jika jalur terpendek pada iterasi ini lebih pendek,
      // maka jalur terpendek sebelumnya diganti dengan jalur terpendek pada iterasi ini
      if (
        !all_time_shortest_path ||
        shortest_path[1] < all_time_shortest_path[1]
      ) {
        all_time_shortest_path = shortest_path;
      }
    }

    // mengembalikan jalur terpendek di semua iterasi
    return all_time_shortest_path;
  }

  spread_pheronome(all_paths: PathAndTotalDistance[], n_best: number) {
    // mengurutkan jalur-jalur yang diambil oleh semut berdasarkan jarak
    const sorted_paths = all_paths.sort((a, b) => a[1] - b[1]);

    // mengupdate pheromone berdasarkan jalur yang diambil oleh semut
    // pheromone yang diupdate hanya sebanyak n_best (jalur terpendek yang diambil oleh semut)
    sorted_paths.slice(0, n_best).forEach(([path, _]) => {
      path.forEach(([from, to]) => {
        this.pheromone[from][to] += 1.0 / this.distances[from][to];
      });
    });
  }

  generate_path_distance(path: FromTo[]) {
    let total_dist = 0;
    path.forEach(([from, to]) => (total_dist += this.distances[from][to]));
    return total_dist;
  }

  generate_all_paths() {
    // semua jalur yang diambil oleh semut
    let all_paths: PathAndTotalDistance[] = [];

    for (let i = 0; i < this.n_ants; i++) {
      // mendapatkan jalur yang diambil oleh suatu semut
      const path = this.generate_path(0);

      // menambahkan jalur yang diambil oleh semut ke dalam all_paths
      all_paths.push([path, this.generate_path_distance(path)]);
    }

    return all_paths;
  }

  generate_path(start: 0): FromTo[] {
    // jalur yang diambil oleh suatu semut
    let path: FromTo[] = [];

    // node yang sudah dikunjungi
    let visited = new Set<number>();

    // menambahkan node start ke dalam visited
    visited.add(start);

    // inisialisasi node sebelumnya dengan start
    let prev: number = start;

    for (let i = 0; i < this.distances.length - 1; i++) {
      // mendapatkan node yang akan dikunjungi oleh semut
      const move = this.pick_move(
        this.pheromone[prev],
        this.distances[prev],
        visited
      );

      // menambahkan node yang dikunjungi ke dalam path
      path.push([prev, move]);

      // mengupdate node sebelumnya dengan node yang dikunjungi
      prev = move;

      // menambahkan node yang dikunjungi ke dalam visited
      visited.add(move);
    }

    // menambahkan node terakhir ke dalam path
    path.push([prev, start]);

    // mengembalikan jalur yang diambil oleh semut
    return path;
  }

  pick_move(pheromone: number[], dist: number[], visited: Set<number>) {
    // membuat local pheromone
    const pheromone_copy = [...pheromone];

    // mengupdate local pheromone dengan 0 pada node yang sudah dikunjungi
    Array.from(visited).forEach((i) => (pheromone_copy[i] = 0));

    // menghitung probabilitas untuk setiap node yang belum dikunjungi
    const row: number[] = pheromone_copy.map((p, i) => {
      return p ** this.alpha * (1.0 / dist[i]) ** this.beta;
    });

    // normalisasi probabilitas
    const norm_row = row.map((r) => r / row.reduce((a, b) => a + b, 0));

    // memilih node yang akan dikunjungi oleh semut berdasarkan jumlah kumulatif probabilitas
    const move = this.cumulative_probability_choice(this.all_inds, norm_row);

    // mengembalikan node yang akan dikunjungi oleh semut
    return move;
  }

  cumulative_probability_choice(arr: number[], p: number[]): number {
    let result: number;
    let r = Math.random();
    let sum = 0;

    for (let j = 0; j < arr.length; j++) {
      sum += p[j];
      if (r < sum) {
        result = arr[j];
        break;
      }
    }

    return result!;
  }
}

export default AntColony;
