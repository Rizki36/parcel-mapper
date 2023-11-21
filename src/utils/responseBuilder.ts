import { NextResponse } from "next/server";

type BuildDTO<T> = {
  status: number;
  data?: T;
  error?: {
    id: string;
    message: string;
    detail?: any;
  };
};

class ResponseBuilder {
  public static build<T = any>(dto: BuildDTO<T>) {
    return NextResponse.json(
      {
        status: dto.status,
        data: dto.data,
        error: dto.error,
      },
      {
        status: dto.status,
      }
    );
  }
}

export default ResponseBuilder;
