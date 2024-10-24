import request from "./request";

export async function getByLabel({ labelName, page = 1, perPage = 20 }) {
  try {
    const response = await request.get(
      `/{label}?nameLabel=${labelName}&page=${page}&limit=${perPage}`,
    );
    return response.data;
  } catch (error) {}
}
