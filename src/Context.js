import React, { Component } from "react";

import items from "./utils/data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true
    };
  }
  componentDidMount() {
    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter(room => room.featured === true);
    // console.log(featuredRooms);
    this.setState({ rooms, featuredRooms, sortedRooms: rooms, loading: false });
  }
  formatData(items) {
    let tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      const room = {
        ...item.fields,
        images,
        id
      };
      return room;
    });
    return tempItems;
  }
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
