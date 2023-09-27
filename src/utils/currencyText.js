// "use strict";

export const ThaiNumberToText = (Number) => {
	let number = '';
	number = Number.toString().replace(/๐/gi,'0');  
	number = Number.toString().replace(/๑/gi,'1');  
	number = Number.toString().replace(/๒/gi,'2');
	number = Number.toString().replace(/๓/gi,'3');
	number = Number.toString().replace(/๔/gi,'4');
	number = Number.toString().replace(/๕/gi,'5');
	number = Number.toString().replace(/๖/gi,'6');
	number = Number.toString().replace(/๗/gi,'7');
	number = Number.toString().replace(/๘/gi,'8');
	number = Number.toString().replace(/๙/gi,'9');

	return 	ArabicNumberToText(number);
}

export const ArabicNumberToText = (Number) => {
	var Number = CheckNumber(Number);
	var NumberArray = new Array ("ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ");
	var DigitArray = new Array ("", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน");
	var BahtText = "";
	let DecimalLen = 0;

	if (isNaN(Number)) {
		return "ข้อมูลนำเข้าไม่ถูกต้อง";
	} else {
		if ((Number - 0) > 9999999.9999) {
			return "ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้";
		} else {
			Number = Number.split (".");
			if (Number[1].length > 0) {
				Number[1] = Number[1].substring(0, 2);
			}

			var NumberLen = Number[0].length - 0;
			for(var i = 0; i < NumberLen; i++) {
				var tmp = Number[0].substring(i, i + 1) - 0;
				if (tmp != 0) {
					if ((i == (NumberLen - 1)) && (tmp == 1)) {
						BahtText += "เอ็ด";
					} else if ((i == (NumberLen - 2)) && (tmp == 2)) {
						BahtText += "ยี่";
					} else if ((i == (NumberLen - 2)) && (tmp == 1)) {
						BahtText += "";
					} else {
						BahtText += NumberArray[tmp];
					}

					BahtText += DigitArray[NumberLen - i - 1];
				}
			}

			BahtText += "บาท";

			if ((Number[1] == "0") || (Number[1] == "00")) {
				BahtText += "ถ้วน";
			} else {
				DecimalLen = Number[1].length - 0;
				for (var i = 0; i < DecimalLen; i++) {
					var tmp = Number[1].substring(i, i + 1) - 0;
					if (tmp != 0) {
						if ((i == (DecimalLen - 1)) && (tmp == 1)) {
							BahtText += "เอ็ด";
						} else if ((i == (DecimalLen - 2)) && (tmp == 2)) {
							BahtText += "ยี่";
						} else if ((i == (DecimalLen - 2)) && (tmp == 1)) {
							BahtText += "";
						} else {
							BahtText += NumberArray[tmp];
						}

						BahtText += DigitArray[DecimalLen - i - 1];
					}
				}

				BahtText += "สตางค์";
			}

			return BahtText;
		}
	}
}

export const CheckNumber = (Number) => {
	var decimal = false;
	let number = Number.toString().replace(/ |,|บาท|฿/gi,'');

	for (var i = 0; i < number.length; i++)	{
		if(number[i] =='.') {
			decimal = true;
		}
	}

	if(decimal == false) {
		number = number+'.00';
	}

	return number
}