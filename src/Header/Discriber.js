import headerData from './headerData'
import Name from './Name'
import StatusBar from './StatusBar'

const Discriber = () => (
    <div className='container'>
        <Name />
        <StatusBar header={headerData} />
    </div>
)

export default Discriber