const StatusBar = ({header}) => (
    <div className="status_bar"> 
        <Boards boards={header.boards} />
        <Pins pins={header.pins} />
        <Likes likes={header.likes} />
        <Followers followers={header.followers} />
        <Following following={header.following} />
    </div>
)

const Boards = ({ boards }) => (
    <div>
        <b>{boards}</b> <span>boards</span>
    </div>
)

const Pins = ({ pins }) => (
    <div className='pins'>
        <b>{pins}</b> <span>pins</span>
    </div>
)

const Likes = ({ likes }) => (
    <div>
        <b>{likes}</b> likes
    </div>
)

const Followers = ({ followers }) => (
    <div>
        <b>{followers}</b> followers
    </div>
)

const Following = ({ following }) => (
    <div>
        <b>{following}</b> following
    </div>
)

export default StatusBar