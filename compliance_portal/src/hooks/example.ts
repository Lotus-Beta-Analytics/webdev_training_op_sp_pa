// HTTP Methods
// GET POST PATCH PUT DELETE OPTIONS HEAD

// TODO: using react query for data fetching and caching

// get compliance
export const getInititives = async () => {
  const url = "https://lbansdlc.azurewebsites.net/api/v1/initiative";

  // // using .then syntax
  // const response = fetch(url, {
  //   method: "GET",
  // })
  //   .then((res) => {
  //     console.log({ res });
  //     const parsedRes = res.json().then((pRes) => {
  //       console.log({ pRes });
  //       return pRes;
  //     });
  //     return parsedRes;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  const response = await fetch(url, {
    method: "GET",
  });
  console.log({ response });

  const data = await response.json();
  console.log({ data });

  const intitatives = data.data;

  // takes almost no time
  // const sumOfNumbers = [1,2,3].reduce()

  return intitatives;

  // sp.lists.getByTitle("Admin")
  // sp.url("https://mtncloud.sharepoint.com/sites/UATApplications/MTNADF").lists
};

async function displayInitiatives() {
  const data = await getInititives().catch((err) => {});

  // const data = getInititives().then((res) => res).then().then().catch(err => {

  // })
}
