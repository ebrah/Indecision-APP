
let tog = false;
const show = () => {
    tog = !tog;
    renderThis();
};

const renderThis = () => {

    const toggle = (
    <div>
        <button onClick={show}> {tog ? 'show' : 'hide' } </button>
        <p>{ tog && (
            <div>  More you drill the more u in .. </div>
        )}
        </p>
    </div>
    );

    ReactDOM.render(toggle, document.getElementById('app'));

};

renderThis();