// Data grid , with render cell functionality and onCLick function for render cell.
// Here there is not server side pagination made. 


import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar, GridPagination } from '@mui/x-data-grid';
import { users } from '../mocks/usersData'

function CustomDataGrid() {
  const [user, setusers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

    window.alert("ID of the user :"+id)

  }


  const actionButton = (id)=>{
    //window.alert(id);
    return<>
    <button onClick={()=>{onClickActionButton(id)}}>View</button>
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

  const handlePageChange = (params) => {
    const { page } = params;
    console.log("Next page button pressed");
    console.log("Page:", page);
  };

  return (
    <div style={{ height: '400px', width: '100%', paddingTop: '80px' }}>
      <DataGrid
        loading={user.length === 0 ? true : false}
        rows={user}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
              page: currentPage,

            },
          },
        }}
        pagination
        onPageChange={handlePageChange}
        pageSizeOptions={[10]}
        onPaginationModelChange={(newPage) => { console.log(newPage) }}
      />
    </div>
  );
}

export default CustomDataGrid;

