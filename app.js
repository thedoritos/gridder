const division = 4;
const files = [
    // TODO: List files here
];

var app = new Vue({
    el: '#app',
    data: {
        columns: Array.from(Array(division).keys())
            .map(columnIndex => {
                var width = Math.floor(files.length / division);
                return Array.from(Array(width).keys())
                    .map(itemIndex => files[width * itemIndex + columnIndex])
                    .filter(file => file !== undefined)
                    .map(file => { return { src: file }; });
            })
    }
});
