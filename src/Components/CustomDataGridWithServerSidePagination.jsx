// refer this, good one for server side pagination.

import React, { useEffect, useState } from 'react'
import { DataGrid} from '@mui/x-data-grid';
import { users } from '../mocks/usersData'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function CustomDataGridWithServerSidePagination() {
  const [user, setusers] = useState([]);
  const [pageNo,setPageNo] = useState(1);

  useEffect(() => {
    setusers(users)
  }, [])


  const checkAge = (age) => {

    let color = 'green';
    if (age <= 25)
      color = 'red';

    return <>
      <span style={{ color: color }}>{age}</span>
    </>


  }


  const onClickActionButton = (id) => {

    window.alert("ID of the user :" + id)

  }


  const actionButton = (id) => {
    return <>
      <button onClick={() => { onClickActionButton(id) }}>View</button>
    </>
  }

  let columns = [
    {
      field: 'id', headerName: 'ID', width: 250
    },
    {
      field: 'name', headerName: 'Name', width: 250
    },
    {
      field: 'email', headerName: 'Email', width: 250
    },
    {
      field: 'role', headerName: 'Role', width: 250
    },
    {
      field: 'age', headerName: 'Age', width: 250, renderCell: (params) => checkAge(params.row.age)
    },
    {
      field: 'actions', headerName: 'Actions', width: 250, renderCell: (params) => actionButton(params.row.id)
    }
  ]

  const handlePageChange = (event,page) => {
    
   setPageNo(parseInt(page))
  };

  const customFooter = () => {
    return <>
      <Stack margin={2} alignItems={'flex-end'}>
        <Pagination count={150} color='primary' onChange={handlePageChange} page={pageNo} />
      </Stack>
    </>

  }

  return (
    <div style={{ height: '400px', width: '100%', paddingTop: '80px' }}>
      <h6>Click Me</h6>
      <DataGrid
        loading={user.length === 0 ? true : false}
        rows={user}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
              page:pageNo,

            },
          },
        }}
        pageSizeOptions={[10]}
        components={{
          Footer: customFooter
        }}

      />
    </div>
  );
}

export default CustomDataGridWithServerSidePagination;




