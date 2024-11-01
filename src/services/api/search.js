import request from "./request";

export async function getByLabel({ labelName, page = 1, perPage = 20 }) {
  try {
    const response = await request.get(
      `/findByLabel/{label}?nameLabel=${labelName}&page=${page}&limit=${perPage}`,
    );
    return response.data;
  } catch (error) {}
}

export async function searchQuestion({ question, page = 1, perPage = 20 }) {
  try {
    const response = await request.get(
      `/findByDescription?description=${question}&page=${page}&limit=${perPage}`,
    );
    return response.data;
  } catch (error) {}
}
