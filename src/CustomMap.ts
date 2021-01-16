export interface Mappable {
  location: {
    lat: number;
    long: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googlemap: google.maps.Map;
  constructor(divId: string) {
    this.googlemap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  showMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googlemap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.long,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });

    marker.addListener('click', () => {
      infoWindow.open(this.googlemap, marker);
    });
  }
}
