window.onload = function() {
    var remover = new GmailBarRemover();
};

function GmailBarRemover() {
	this.intervalTimer = setInterval(function() {
    	this.setup();
    }.bind(this), 1000);
}

GmailBarRemover.prototype.setup = function() {
    var possible_containers = $('div:contains("having trouble renewing your storage plan")').add('div:contains("forwarding some of your email to")');
    if (possible_containers.size() > 0) {
    	var container_to_remove = $(possible_containers[possible_containers.length - 1]).parent();
	    $(container_to_remove).hide();
	    clearInterval(this.intervalTimer);
    }
};