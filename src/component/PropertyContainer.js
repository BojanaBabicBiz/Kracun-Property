import React from 'react';
import Search from '../component/Search'
import PropertyList from "./PropertyList";
import { RoomConsumer } from '../Context'
import Loading from './Loading'
export default function PropertyContainer() {
    return (
        <RoomConsumer>
            {
                value => {
                    const { loading, sortedRooms, rooms } = value;
                    if (loading) {
                        return <Loading />
                    }
                    return (
                        <div>
                            <Search rooms={rooms} />
                            <PropertyList rooms={sortedRooms} />
                        </div>
                    )
                }
            }
        </RoomConsumer>

    );
}

