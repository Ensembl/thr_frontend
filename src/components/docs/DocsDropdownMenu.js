/**
 * See the NOTICE file distributed with this work for additional information
 * regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {useState} from "react";
import {Button, Divider, Menu, MenuItem} from "@material-ui/core";

import NestedMenuItem from "material-ui-nested-menu-item";

export const DocsDropdownMenu = () => {
    const [menuPosition, setMenuPosition] = useState(null);

    const handleClick = (e) => {
        if (menuPosition) {
            return;
        }
        e.preventDefault();
        setMenuPosition({
            top: e.pageY,
            left: e.pageX
        });
    };

    const handleItemClick = (e) => {
        setMenuPosition(null);
    };

    return (
        <div onClick={handleClick}>
            <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Documentation
            </Button>
            <Menu
                open={!!menuPosition}
                onClose={() => setMenuPosition(null)}
                anchorReference="anchorPosition"
                anchorPosition={menuPosition}
            >
                <NestedMenuItem
                    label="Searching Track Hubs"
                    parentMenuOpen={!!menuPosition}
                    onClick={handleItemClick}
                >
                    <MenuItem component="a" href="/docs/search">Basic Search</MenuItem>
                    <MenuItem component="a" href="/docs/search/advanced">Advanced Search</MenuItem>
                </NestedMenuItem>
                <NestedMenuItem
                    label="Registering/Managing Track Hubs"
                    parentMenuOpen={!!menuPosition}
                    onClick={handleItemClick}
                >
                    <MenuItem component="a" href="/docs/management/overview">Overview</MenuItem>
                    <MenuItem component="a" href="/docs/management/assembly_support">Supported Genome Assemblies</MenuItem>
                    <MenuItem component="a" href="/docs/management/modelling">Modelling Track Hubs</MenuItem>
                    {/*<MenuItem component="a" href="/docs/api/registration">REST API</MenuItem>*/}
                    <MenuItem component="a" href="/docs/management/dashboard">Dashboard</MenuItem>
                </NestedMenuItem>
                <Divider/>
                <MenuItem component="a" href="/docs/apis">Registry APIs</MenuItem>
                <MenuItem component="a" href="/docs/management/modelling">TrackDB JSON specification</MenuItem>
            </Menu>
        </div>
    );
};

export default DocsDropdownMenu;
