import gql from 'graphql-tag';

export const GET_USERS_QUERY = gql`
query getvalid_users($Code_User: String, $Password: String) {
    getvalid_users(Code_User: $Code_User, Password: $Password) {
        Id
        Code_User
        Full_Name
        Electronic_Address
        Phone_Number
        Id_Language
        IsAdmin
        AllowEdit
        AllowDelete
        AllowInsert
        AllowExport
        IsActive
        Token
    }
}
`;