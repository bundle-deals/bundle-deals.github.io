
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/authors",
    "title": "Authors",
    "body": "                                                                                                                                                              killcreek:         Web Developer/Designer🚀 turned SEO 🌐 / Writer 📝                "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to Bundle Deals. We will reply as soon as possible!    "
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                              10 Must-Have Small Appliances for a Convenient Lifestyle                         1 2 3 4 5                      :       Small appliances have become an essential part of modern life. . . . :               "
    }, {
    "id": 5,
    "url": "http://localhost:4000/31-must-have-small-appliances-for-a-convenient-lifestyle/",
    "title": "10 Must-Have Small Appliances for a Convenient Lifestyle",
    "body": "2020/02/12 - Small appliances have become an essential part of modern life. They can help you save time and effort, simplify your routine tasks, and make your life more comfortable. With so many options available in the market, it can be overwhelming to choose the right one for your needs. That’s why we’ve compiled a list of the top 10 small appliances that can make your life easier. 1. Coffee Maker: A coffee maker is a must-have for all coffee lovers. It can brew a perfect cup of coffee in minutes, and some models even have a built-in grinder for freshly ground coffee. Whether you prefer drip coffee, espresso, or cappuccino, a coffee maker can deliver the perfect cup every time. 2. Air Fryer: An air fryer is a healthy alternative to deep-fried foods. It uses hot air to cook food, making it crispy on the outside and tender on the inside. You can fry, bake, grill, or roast anything from chicken wings to vegetables. Plus, it’s easy to clean and saves time compared to traditional cooking methods. 3. Blender: A blender can be used to make smoothies, soups, sauces, and dips. It can also crush ice and blend frozen fruits, making it perfect for making refreshing summer drinks. Some models even have pre-programmed settings for different recipes, making it easier to achieve the perfect consistency. 4. Toaster Oven: A toaster oven is a versatile appliance that can be used for baking, broiling, and toasting. It can be used to cook small meals, reheat leftovers, or make a quick snack. Plus, it’s more energy-efficient than a full-size oven, making it a great option for smaller households. 5. Stand Mixer: A stand mixer is a baking enthusiast’s best friend. It can be used to mix, knead, and whip ingredients, making it perfect for baking cakes, cookies, bread, and more. Some models even come with attachments for pasta making or meat grinding. 6. Food Processor: A food processor can chop, slice, shred, and puree ingredients. It can be used to make homemade salsa, hummus, or pesto in minutes. Plus, it can save you time compared to manual chopping, making it perfect for meal prep. 7. Electric Kettle: An electric kettle can boil water in minutes, making it perfect for making tea, coffee, or hot cocoa. Some models even have different temperature settings for different types of tea or coffee. Plus, it’s safer and more energy-efficient than boiling water on the stove. 8. Handheld Vacuum: A handheld vacuum can be used to clean up spills, crumbs, and pet hair. It’s perfect for small messes or hard-to-reach places. Plus, it’s lightweight and easy to use, making it a great option for quick cleanups. 9. Rice Cooker: A rice cooker can cook perfect rice every time, without the need for constant monitoring. It can also be used to cook other grains, such as quinoa or oatmeal. Plus, some models even have a steamer basket for cooking vegetables or fish. 10. Immersion Blender: An immersion blender is a handheld blender that can be used to blend soups, sauces, and smoothies directly in the pot or glass. It’s easy to use and clean, making it perfect for small batches or on-the-go blending. Conclusion: Small appliances can make your life easier and more comfortable. Whether you’re a coffee lover, a baking enthusiast, or a health-conscious eater, there’s a small appliance for every need. From coffee makers to air fryers, blenders to toaster ovens, the top 10 small appliances we’ve listed above can help you save time and effort while simplifying your routine tasks. These appliances are versatile, easy to use, and can make your life more comfortable. When shopping for small appliances, consider your needs and preferences, as well as the features and functions of the appliance. Choose high-quality appliances from reputable brands to ensure their reliability and durability. With the right small appliances, you can enjoy a more convenient and efficient lifestyle. FAQs:  Are small appliances more energy-efficient than full-size appliances? Yes, small appliances are generally more energy-efficient than full-size appliances. They use less power and are designed to perform specific tasks efficiently.  Can small appliances save me time? Yes, small appliances can save you time by simplifying your routine tasks and making them more efficient. For example, a coffee maker can brew a perfect cup of coffee in minutes, while a blender can make smoothies in seconds.  How do I choose the right small appliance? Consider your needs and preferences, as well as the features and functions of the appliance. Look for high-quality appliances from reputable brands that offer reliable and durable performance.  What are the benefits of using small appliances? Small appliances can help you save time and effort, simplify your routine tasks, and make your life more comfortable. They can also help you eat healthier, save energy, and reduce waste.  How do I maintain my small appliances? Follow the manufacturer’s instructions for cleaning and maintenance. Regularly clean the appliance and replace any worn or damaged parts. Store the appliance in a safe and dry place when not in use. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});