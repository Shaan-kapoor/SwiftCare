$(document).ready(function() {
  $('#medical-problem').select2({
    placeholder: 'Please select...',
    allowClear: true,
    minimumInputLength: 1,
    ajax: {
      url: 'https://api.publicapis.org/entries',
      dataType: 'json',
      data: function(params) {
        var query = {
          q: params.term,
          category: 'health',
          https: true
        };
        return query;
      },
      processResults: function(data) {
        var results = [];
        $.each(data.entries, function(index, entry) {
          results.push({
            id: entry.API,
            text: entry.API
          });
        });
        return {
          results: results
        };
      }
    }
  });
});
