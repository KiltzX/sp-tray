<<<<<<< HEAD
=======
// Copyright(C) 2021  Emre Şenliyim

// This program is free software: you can redistribute it and / or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

// This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
// GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
// along with this program.If not, see < http://www.gnu.org/licenses/>.

>>>>>>> multi-gtk
'use strict';

const Main = imports.ui.main;
const Me = imports.misc.extensionUtils.getCurrentExtension();

const { SpTrayButton } = Me.imports.panelButton;
<<<<<<< HEAD

class SpTrayExtension {
    constructor() {
        this.extensionButton = null;
    }

    enable() {
        this.extensionButton = new SpTrayButton();
        Main.panel.addToStatusArea('SpTray', this.extensionButton);
    }

    disable() {
        this.extensionButton.destroy();
        this.extensionButton = null;
    }
}

function init () {

=======

class SpTrayExtension {
    constructor() {
        this.extensionButton = null;
    }

    enable() {
        this.extensionButton = new SpTrayButton();
        Main.panel.addToStatusArea('SpTray', this.extensionButton);
    }

    disable() {
        this.extensionButton.destroy();
        this.extensionButton = null;
    }
}

function init () {
>>>>>>> multi-gtk
    return new SpTrayExtension();
}