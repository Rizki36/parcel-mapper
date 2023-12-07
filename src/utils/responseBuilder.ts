import { NextResponse } from "next/server";

export type BuildParams<T> = {
  status: number;
  data?: T;
  error?: {
    id: string;
    message: string;
    detail?: any;
  };
};

export type BuildPaginatedParams<T> = {
  status: number;
  docs: T[];
  totalPages: number;
  totalDocs: number;
  pageSize: number;
  pageIndex: number;
};

export type BuildResponse<T> = Omit<BuildParams<T>, "status">;
export type BuildPaginatedResponse<T> = BuildResponse<
  Omit<BuildPaginatedParams<T>, "status">
>;

class ResponseBuilder {
  public static build<T = any>(params: BuildParams<T>) {
    return NextResponse.json(
      {
        status: params.status,
        data: params.data,
        error: params.error,
      },
      {
        status: params.status,
      }
    );
  }

  public static buildPaginated<T = any>(params: BuildPaginatedParams<T>) {
    return ResponseBuilder.build({
      status: params.status,
      data: {
        docs: params.docs,
        totalPages: params?.totalPages,
        totalDocs: params?.totalDocs,
        pageSize: params?.pageSize,
        pageIndex: params?.pageIndex,
      },
    });
  }
}

export default ResponseBuilder;
