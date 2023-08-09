import Pagination from 'react-bootstrap/Pagination';

const pageNum = () => {
  return (
    <>
    <Pagination>
      
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{9}</Pagination.Item>
      <Pagination.Item >{10}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />

    </Pagination>
    </>
  );
}

export default pageNum;