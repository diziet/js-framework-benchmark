var viewModel = function() {
    this.msg = ko.observable("knockout loaded");
};

ko.applyBindings(new viewModel());