const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return <div>DynamicPage : {params.id}</div>;
};

export default DynamicPage;
