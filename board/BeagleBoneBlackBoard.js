/**
 * HIL Remote Protocol - Boards definition
 * author: Jesús Chacón <jcsombria@gmail.com>
 *
 * Copyright (C) 2014 Jesús Chacón
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var Board = require('./Boards');
var bonescript = require('bonescript');
var ioDir = Board.ioDir;
var ioDir = Board.ioType;

// BeagleBone Black board
var BeagleBoneBlack = function() {
	this.name = "BeagleBone Black Board";

	this.hwio = {
//		"var": {	name:'VARIABLE', range: {min:0.0, max:1.8},	dir:ioDir.IN_OUT, current_dir:ioDir.IN_OUT },
		"P8_1": {	name:'DGND', range: {min:0.0, max:1.8},	dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_2": {	name:'DGND', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_3": {	name:'VDD_5V', range: {min:5.0, max:5.0},	dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_4": { name:'VDD_5V', range: {min:5.0, max:5.0}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_5": { name:'SYS_5V', range: {min:5.0, max:5.0}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_6": { name:'SYS_5V', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_7": { name:'PWR_BUT', range: {min:0.0, max:0.0}	},
		"P8_8": { name:'SYS_RESETn', range: {min:0.0, max:0.0}},
		"P8_9": { name:'GPIO_30', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P8_10": { name:'GPIO_60', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_11": { name:'GPIO_31', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_12": { name:'GPIO_40', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_13": { name:'GPIO_48', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_14": { name:'GPIO_51', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_15": { name:'GPIO_4', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_16": { name:'GPIO_5', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P8_17": { name:'I2C2_SCL', range: {min:0.0, max:1.8}	},
		"P8_18": { name:'I2C2_SDA', range: {min:0.0, max:1.8}	},
		"P8_19": { name:'GPIO_3', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P8_20": { name:'GPIO_2', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P8_21": { name:'GPIO_49', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_22": { name:'GPIO_15', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_23": { name:'GPIO_117', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P8_24": { name:'GPIO_14', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_25": { name:'GPIO_125', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P8_26": { name:'GPIO_123', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P8_27": { name:'GPIO_121', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_28": { name:'GPIO_122', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P8_29": { name:'GPIO_120', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P8_30": { name:'VDD_ACC', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_31": { name:'AIN4', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN },
		"P8_32": { name:'GNDA_ADC', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_33": { name:'AIN6', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P8_34": { name:'AIN5', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P8_35": { name:'AIN2', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P8_36": { name:'AIN3', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P8_37": { name:'AIN0', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P8_38": { name:'AIN1', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P8_39": { name:'GPIO_20', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P8_40": { name:'GPIO_7', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P8_41": { name:'DGND', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_42": { name:'DGND', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_43": { name:'DGND', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P8_44": { name:'DGND', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_1": {	name:'DGND', range: {min:0.0, max:1.8},	dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_2": {	name:'DGND', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_3": {	name:'VDD_5V', range: {min:5.0, max:5.0},	dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_4": { name:'VDD_5V', range: {min:5.0, max:5.0}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_5": { name:'SYS_5V', range: {min:5.0, max:5.0}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_6": { name:'SYS_5V', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_7": { name:'PWR_BUT', range: {min:0.0, max:0.0}	},
		"P9_8": { name:'SYS_RESETn', range: {min:0.0, max:0.0}},
		"P9_9": { name:'GPIO_30', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P9_10": { name:'GPIO_60', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_11": { name:'GPIO_31', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_12": { name:'GPIO_40', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_13": { name:'GPIO_48', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_14": { name:'GPIO_51', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_15": { name:'GPIO_4', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_16": { name:'GPIO_5', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P9_17": { name:'I2C2_SCL', range: {min:0.0, max:1.8}	},
		"P9_18": { name:'I2C2_SDA', range: {min:0.0, max:1.8}	},
		"P9_19": { name:'GPIO_3', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P9_20": { name:'GPIO_2', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P9_21": { name:'GPIO_49', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_22": { name:'GPIO_15', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_23": { name:'GPIO_117', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P9_24": { name:'GPIO_14', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_25": { name:'GPIO_125', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P9_26": { name:'GPIO_123', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P9_27": { name:'GPIO_121', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_28": { name:'GPIO_122', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P9_29": { name:'GPIO_120', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P9_30": { name:'VDD_ACC', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_31": { name:'AIN4', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN },
		"P9_32": { name:'GNDA_ADC', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_33": { name:'AIN6', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P9_34": { name:'AIN5', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P9_35": { name:'AIN2', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P9_36": { name:'AIN3', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P9_37": { name:'AIN0', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P9_38": { name:'AIN1', range: {min:0.0, max:1.8}, dir:ioDir.IN, current_dir:ioDir.IN	},
		"P9_39": { name:'GPIO_20', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN },
		"P9_40": { name:'GPIO_7', range: {min:0.0, max:1.8}, dir:ioDir.IN_OUT, current_dir:ioDir.IN	},
		"P9_41": { name:'DGND', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_42": { name:'DGND', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_43": { name:'DGND', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT },
		"P9_44": { name:'DGND', range: {min:0.0, max:1.8}, dir:ioDir.OUT, current_dir:ioDir.OUT }
	};
}

BeagleBoneBlack.prototype.hasPin = function(pin) {
	if(this.hwio[pin]) {
		return true;
	} else {
		return false;
	}	
};

BeagleBoneBlack.prototype.isInput = function(pin) {
	var isInput = this.hasPin(pin) && this.hwio[pin].current_dir == ioDir.IN;
	return isInput;
}

BeagleBoneBlack.prototype.isOutput = function(pin) {
	var isOutput = this.hasPin(pin) && this.hwio[pin].current_dir == ioDir.OUT;
	return isOutput;
}

BeagleBoneBlack.prototype.isInputOutput = function(pin) {
	return (this.hasPin(pin) && this.hwio[pin].dir == ioDir.IN_OUT);
}

BeagleBoneBlack.prototype.pinRange = function(pin) {
	if(this.hasPin(pin)) {
		return this.hwio[pin].range;
	} else {
		var defaultPinRange = { min:0, max:0 };
		return defaultPinRange;
	}
}

BeagleBoneBlack.prototype.read = function(pin) {
	if(this.isInput(pin)) {
//		return bonescript.analogRead(pin);
	}
}

BeagleBoneBlack.prototype.write = function(pin, value) {
	if(this.isOutput(pin) && value >= 0 && value <= 1) {
//		return bonescript.analogWrite(pin, value);
	}
}

BeagleBoneBlack.prototype.pinRange = function(pin) {
	if(this.hasPin(pin)) {
		return this.hwio[pin].range;
	} else {
		var defaultPinRange = { min:0, max:0 };
		return defaultPinRange;
	}
}

BeagleBoneBlack.prototype.setInputMode = function(pin) {
	if(this.isInputOutput(pin)) {
//		bonescript.pinMode(bonescript.INPUT);
		this.hwio[pin].current_dir = ioDir.IN;
	}
}

BeagleBoneBlack.prototype.setOutputMode = function(pin) {
	if(this.isInputOutput(pin)) {
//		bonescript.pinMode(bonescript.OUTPUT);
		this.hwio[pin].current_dir = ioDir.OUT;
	}
}

// Module Exports
module.exports.BeagleBoneBlack = new BeagleBoneBlack();
