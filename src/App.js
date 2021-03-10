import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Dashboard } from "./components/dashboard";
import { UserList } from "./components/users";
import { ContentList, ContentEdit, ContentCreate } from "./components/contents";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

// import buildGraphQLProvider from "ra-data-graphql";
// import ApolloClient from "apollo-client";
// import { HttpLink } from "apollo-link-http";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

// const apolloClient = new ApolloClient({
//   link: new HttpLink({
//     uri: "https://rickandmortyapi.com/graphql",
//   }),
//   connectToDevTools: true,
// });
// const dataProvider = buildGraphQLProvider({ apolloClient });

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource
      name="posts"
      list={ContentList}
      edit={ContentEdit}
      create={ContentCreate}
      icon={PostIcon}
    />
  </Admin>
);
export default App;
