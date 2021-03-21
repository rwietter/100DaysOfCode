import 'package:http/http.dart' as http;
import 'dart:convert';

class Album {
  late int userId;
  late int id;
  late String title;

  Album({required this.userId, required this.id, required this.title});

  Album.fromJson(Map<String, dynamic> json) {
    userId = json['userId'];
    id = json['id'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['userId'] = this.userId;
    data['id'] = this.id;
    data['title'] = this.title;
    return data;
  }
}

class AsynchronousCall {
  Future<Album> fetchAlbum() async {
    try {
      final uri = Uri.https("jsonplaceholder.typicode.com", "/albums/1");
      final response = await http.get(uri);

      print(response);

      if (response.statusCode == 200) {
        return Album.fromJson(jsonDecode(response.body));
      } else {
        throw Exception('Failed to load album');
      }
    } catch (error){
      throw Exception(error);
    }
  }
}

Future<void> main(List<String> args) async {
  var asyncCall = new AsynchronousCall();
  Album album = await asyncCall.fetchAlbum();
  print(album.toJson());
}
