import {Dropdown} from "semantic-ui-react";
import React from "react";

export const BandRoleSelector = ({ roles, onChange }) =>
    <Dropdown
        placeholder='Select Role'
        selection
        options={roles}
        onChange={onChange}
    />;

