const Name = ({cards}) => (
    <div>
        {cards.map(name =>
        <div key={name.id}>
            {name.themeName}
        </div>    
        )}
    </div>
)

export default Name