import React from "react";

const Form = (props) => (
    <form onSubmit={props.weatherMetod}>
        <input type="text" name="city" placeholder="Введіть назву міста" />
        <button>Запит</button>
    </form>
);

// class Form extends React.Component {
//     render() {
//         return (
//             <form onSubmit={this.props.weatherMetod}>
//                 <input
//                     type="text"
//                     name="city"
//                     placeholder="Введіть назву міста"
//                 />
//                 <button>Запит</button>
//             </form>
//         );
//     }
// }

export default Form;
