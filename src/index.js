export const hotel = {
    quantityOfPlaces: 30,
    priceByPlace: 20,
    bankAccount: 0,
    guests: {},
    placesLeft: 30,
    getLength: function () {
        return Object.keys(this.guests).length;
    },
    getActualFreePlace: function () {
        return this.placesLeft;
    },
    paidPerPlace: function () {
        this.bankAccount += this.priceByPlace;
    },
    checkInGuest: function (firstName, lastName, money) {
        if (this.placesLeft < 1) {
            return 'Sorry, we have not free spaces'
        };
        if (money < 20) {
            return 'Sorry, you have not enough money'
        };
        this.guests[this.getLength()] = {
            firstName: firstName,
            lastName: lastName,
            money: money - this.priceByPlace,
        };
        this.placesLeft = this.placesLeft - 1;
        this.paidPerPlace();
    },

};

