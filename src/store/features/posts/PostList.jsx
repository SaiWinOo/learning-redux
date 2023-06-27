import {useSelector} from "react-redux";
import {allposts} from './postSlice.jsx';
const PostList = () => {
    const posts = useSelector(allposts);


    const renderPostLists = posts.map(list => (
        <div key={list.id} className={'border shadow-lg p-4 rounded-md'}>
            <h4>{list.title}</h4>
            <p>{list.body}</p>
        </div>
    ))
    return (
        <div className={'mx-40'}>
            {renderPostLists}
        </div>
    );
};

export default PostList;