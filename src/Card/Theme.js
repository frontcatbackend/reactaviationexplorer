const Theme = ({cards}) => (
    <div>
        {cards.map(theme =>
        <div key={theme.id}>
            {theme.cardName}
        </div>    
        )}
    </div>
)

export default Theme