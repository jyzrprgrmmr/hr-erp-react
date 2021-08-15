import { HttpError } from 'src/services/http-service';

export const ApiError = (error: HttpError) => {
  if (typeof error.response?.data === 'string') {
    return error.response.data;
  }

  if (error.response?.data?.errors) {
    if (Array.isArray(error.response.data.errors)) {
      return error.response.data.errors[0];
    }

    return error.response.data.errors;
  }
};
