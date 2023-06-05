if ('geolocation' in navigator) {
    // Geolocalização é suportada
  } else {
    // Geolocalização não é suportada
  }

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      // Localização obtida com sucesso
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
    }, function(error) {
      // Ocorreu um erro ao obter a localização
      console.log('Erro ao obter localização: ' + error.message);
    });
  }