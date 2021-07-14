import React from 'react';
import ImageCard from "./ImageCard";

function ImageColumn(props) {
    const imageCards = [props.images.map(item => <ImageCard key={item.id} item={item}/>)]

    return (
        <div className='photo-column'>
            {imageCards}
        </div>
    );
}

//
// class ImageColumn extends React.Component {
//     constructor(props) {
//         super()
//         this.state = {
//             images: props.images
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//
//     handleChange(id) {
//         this.setState(prevState => {
//             const newItems = prevState.images.map(item => {
//                     if (item.id === id) {
//                         item.like = !item.like
//                     }
//                     return item
//                 }
//             );
//             return {
//                 images: newItems
//             }
//         })
//     }
//
//     render() {
//         // const todoItems = this.state.todos.map(item => <ToDoItem function={this.handleChange} key={item.id}
//         //                                                          item={item}/>)
//         const imageCards = this.state.images.map(item => <ImageCard key={item.id} item={item}
//                                                                likePhoto={this.handleChange}
//         />)
//         return (
//             <div className='photo-column'>
//                 {imageCards}
//             </div>
//         );
//     }
// }

export default ImageColumn;