var locations = [
    [42.3087, -83.0338, 'food', 'In-Class Food Handler Course (Windsor)<br>Thu, Dec 6, 9:30am<br>Windsor-Essex County Health Unit, Windsor, ON<br>Starts at CA$41.65', '1.png'],
    [42.3067, -83.0378, 'food', 'In-Class Food Handler Course (Windsor)<br>Thu, Dec 6, 9:30am<br>Windsor-Essex County Health Unit, Windsor, ON<br>Starts at CA$41.65', '1.png'],
    [42.2806, -82.8919, 'eco', 'W&DHDA 2nd Annual Celtic Christmas Competition<br>Sat, Dec 1, 8:00am<br>Tecumseh Vista Secondary School, Tecumseh, ON<br>Starts at CA$10.00', '2.png'],
    [42.2706, -82.8719, 'eco', 'W&DHDA 2nd Annual Celtic Christmas Competition<br>Sat, Dec 1, 8:00am<br>Tecumseh Vista Secondary School, Tecumseh, ON<br>Starts at CA$10.00', '2.png'],
    [42.317432, -83.026772, 'sale', 'F45 Tecumseh Holiday & End of Challenge Celebration<br>Sat, Dec 8, 7:00pm<br>Thompson House, Windsor, ON<br>Free', '3.png'],
    [42.310432, -83.029772, 'sale', 'F45 Tecumseh Holiday & End of Challenge Celebration<br>Sat, Dec 8, 7:00pm<br>Thompson House, Windsor, ON<br>Free', '3.png'],
    [42.348495, -83.060303, 'food', 'Sugar House Drinking Team: Pappy vs. Weller<br>Sat, Dec 22, 12:00pm<br>The Sugar House, Detroit, MI<br>Starts at $95.00', '4.png'],
    [42.308495, -83.080303, 'food', 'Sugar House Drinking Team: Pappy vs. Weller<br>Sat, Dec 22, 12:00pm<br>The Sugar House, Detroit, MI<br>Starts at $95.00', '4.png'],
    [42.343254, -82.974350, 'eco', 'Restorative Trails in the Great Cities<br>Thu, Dec 6, 7:00pm<br>Belle Isle Nature Center, Detroit, MI<br>Free', '5.png'],
    [42.340254, -82.977350, 'eco', 'Restorative Trails in the Great Cities<br>Thu, Dec 6, 7:00pm<br>Belle Isle Nature Center, Detroit, MI<br>Free', '5.png'],
    [42.343264, -82.979350, 'eco', 'Restorative Trails in the Great Cities<br>Thu, Dec 6, 7:00pm<br>Belle Isle Nature Center, Detroit, MI<br>Free', '5.png'],
    [42.322262, 83.176315, 'food', 'Christmas Party<br>Sat, Dec 8, 11:00am<br>Sarai Palace, Dearborn, MI<br>Free', '6.png'],
    [42.331429, -83.045753, 'food', 'Annual Holiday Tea<br>Sat, Dec 22, 12:00pm<br>The Whitney, Detroit, MI<br>Starts at $75.00', '7.png'],
    [42.3091, -83.0164, 'food', 'Christmas Bazaar at Polish Club Windsor<br>Sun, Dec 2, 11:00am<br>Polish Club Windsor, Windsor, ON<br>Free', '8.png'],
    [42.3354, -83.0725, 'food', 'Drink Detroit: Corktown Historic Bar Tour<br>Thu, Mar 21, 6:00pm<br>Nancy Whiskey Pub, Detroit, MI<br>', '9.png'],
    [42.341179, -83.035378, 'sport', 'Detroit Lions Eastern Market Tailgating<br>Sun, Dec 2, 7:00am + 1 more event<br>Eastern Market, Detroit, MI<br>Starts at $45.00', '10.png'],
    [42.349179, -83.036378, 'sport', 'Detroit Lions Eastern Market Tailgating<br>Sun, Dec 2, 7:00am + 1 more event<br>Eastern Market, Detroit, MI<br>Starts at $45.00', '10.png'],
    [42.340179, -83.039378, 'sport', 'Detroit Lions Eastern Market Tailgating<br>Sun, Dec 2, 7:00am + 1 more event<br>Eastern Market, Detroit, MI<br>Starts at $45.00', '10.png'],
    [42.317432, -83.026772, 'sale', 'Black Friday Sale<br>Fri, Nov 23, 7:00am<br>Windsor Crossing, Windsor, ON<br>', '14.png'],
    [42.3002, -83.0764, 'food', 'Multicultural Night Without Borders<br>Thu, Nov 22, 6:00pm<br>Mackenzie Hall Cultural Centre, Windsor, ON', '11.png'],
    [42.2785, -82.9758, 'sport', '2019 Future Pro Goalie School Summer Camp Windsor, ON<br>Mon, Jul 8, 8:00am<br>Central Park Athletics, Windsor, Ontario<br>Starts at CA$177.72', '12.png'],
    [42.2645, -82.9798, 'sport', '2019 Future Pro Goalie School Summer Camp Windsor, ON<br>Mon, Jul 8, 8:00am<br>Central Park Athletics, Windsor, Ontario<br>Starts at CA$177.72', '12.png'],
    [42.2845, -82.9748, 'sport', '2019 Future Pro Goalie School Summer Camp Windsor, ON<br>Mon, Jul 8, 8:00am<br>Central Park Athletics, Windsor, Ontario<br>Starts at CA$177.72', '12.png'],
    [42.2757, -83.0037, 'sale', 'Black Friday Sale<br>Fri, Nov 23, 7:00am<br>Devonshire Mall, Windsor, ON', '13.png'],
]


function insertLocation(address, type, info, date, time, picture) {
    convertLatLong({ address, type, info, date, time, picture })
}

function convertLatLong(information) {
    var geocoder = new google.maps.Geocoder();
    var pos = [];
    geocoder.geocode({ 'address': information.address }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            insertIntoLocation({ lat: latitude, lng: longitude }, information)
        } else {
            alert("address Error")
        }
    })
}

function insertIntoLocation(latLng, info) {
    var row = [latLng.lat, latLng.lng, info.type, `${info.info}<br>${info.date}, ${info.time}<br>${info.address}`, info.picture]
    locations.push(row)
}


// In form page Example useage
// insertLocation("Devonshire Mall, Windsor, ON", "food", "sale", "Fri, 23 Nov", "12:00", "1.png") 
