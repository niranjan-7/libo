import AddBookForm from "./AddBookForm"
import BookList from "./BookList"
import UserList from "./UserList"




const Home = () => {
    return(
        <>
            <UserList />
            <BookList />
            <AddBookForm />
        </>
    )
}

export default Home 