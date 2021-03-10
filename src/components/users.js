import * as React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

// const Usertiitle = ({ record }) => {
//         return <span>Post {record ? `"${record.title}"` : ''}</span>;
//     };

export const UserList = (props) => (
  <List title={"Users List"} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
