import React from "react";

function RenderTable({ data }) {
    return data.map((user, index) => {
        const { id, actor, verb, object, timestamp } = user; //destructuring
        return (
            <tr key={id}>
                <td>{actor.name}</td>
                <td>{verb["display"]["en-US"]}</td>
                <td>
                    <a href={object["id"]} target="_blank">
                        {object["id"]}
                    </a>
                </td>
                <td>{timestamp.substring(0, 10)}</td>
            </tr>
        );
    });
};

export default RenderTable;
