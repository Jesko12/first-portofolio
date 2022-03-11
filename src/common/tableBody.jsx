import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    if (item["created_at"]) {
      item["created_at"] = new Date(item["created_at"]).toLocaleDateString(
        "en-US"
      );
    }
    
     item["is_active"] = String(item["is_active"]).toString();

    if (item["image_urls"]) {
      item["image_urls"] = (
        <img
          src={item["image_urls"][0]}
          alt=""
          width={50}
          style={{ borderRadius: "10px" }}
        />
      );
    }

    if (item["image_url"]) {
      item["image_url"] = (
        <img
          src={item["image_url"]}
          alt=""
          width={50}
          style={{ borderRadius: "10px" }}
        />
      );
    }
    return _.get(item, column.path);
  };


  createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
