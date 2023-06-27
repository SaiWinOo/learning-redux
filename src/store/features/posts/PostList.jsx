import {useSelector, useDispatch} from "react-redux";
import {allposts , fetchPosts} from "./postSlice.jsx";

const PostList = () => {

    const dispatch = useDispatch();

    const postState = useSelector(allposts);

    const renderPostLists = postState.posts && postState.posts.map(list => (
        <div key={list.id} className={'border shadow-lg p-4 rounded-md'}>
            <h4>{list.title}</h4>
            <p>{list.body}</p>
        </div>
    ))
    return (
        <div className={'mx-40'}>
            <button onClick={()=> dispatch(fetchPosts())} className={'bg-green-500 border  p-2 '}>Fetch posts</button>

            <div>
                {  postState.loading && <h3 className={'text-4xl '}>Loading</h3>}
            </div>

            {renderPostLists}
        </div>
    );
};

export default PostList;