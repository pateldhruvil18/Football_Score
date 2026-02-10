export const fetchFixturesByDate = async (date) => {
  const res = await fetch(
    `/api/v3/football/fixtures/date/${date}?api_token=Gw5TKNPIhZVQ9kzNwXHUm2UjEbDktJ2cKgivW0UFqEEVCTNkW4mbjQOBemoM`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch fixtures");
  }

  return res.json();
};
