import React, { Component } from "react";
import Table from "../../common/table";
import BannerModal from "../../common/bannerModal";
import { Button, ButtonToolbar } from "react-bootstrap";

const options = [
  "true",
  "false"
]

class BannersTableAgrocery extends Component {
  state = {
    modalShowed: false,
    currentBanner: {},
    banners: [],
  };

  columns = [
    { path: "image_url", label: "Image" },
    { path: "name", label: "Name" },
    { path: "type", label: "Type" },
    { path: "is_active", label: "Status" },
    { path: "created_at", label: "Created At" },
    {
      key: "edit",
      content: (banner) => (
        <ButtonToolbar>
          <Button
            className="btn btn-primary btn-sm btn--width100"
            style={{backgroundColor: "#05807C"}}
            onClick={() => this.handleModal(banner)}
          >
            {"Update"}
          </Button>
        </ButtonToolbar>
      ),
    },
  ];

  handleModal = (banner) => {
    const modalShowed = !this.state.modalShowed;
    this.setState({ modalShowed, currentBanner: banner || {} });

    if (modalShowed === false) {
      window.location = `/agrocery/banners`;
    }
  };

  render() {
    const { modalShowed, currentBanner } = this.state;
    const { data, onSort, sortColumn } = this.props;
    return (
      <div>
        <Table
          columns={this.columns}
          data={data}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <BannerModal
          banner={currentBanner}
          show={modalShowed}
          onHide={() => this.handleModal()}
          options={options}
        />
      </div>
    );
  }
}

export default BannersTableAgrocery;
