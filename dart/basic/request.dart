import 'package:http/http.dart' as http;
import 'dart:convert';

class Posts {
  Map<String, dynamic> posts = Map<String, dynamic>();

  Posts.fromJson(List<dynamic> json) {
    // var map1 = Map.fromIterable(json, key: (post) => post['title'], value: (post) => post['title']);
    json.forEach((post) => {
      posts['userId'] = post.userId,
      posts['id'] = post.id,
      posts['title'] = post.title,
      posts['body'] = post.body,
    });
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    posts.forEach((key, value) {
      print(value);
    });
    return data;
  }
}

class AsynchronousCall {
  Future<Posts> fetchPosts() async {
    try {
      final uri = Uri.https("jsonplaceholder.typicode.com", "/posts");
      final response = await http.get(uri);

      String posts = response.body;

      if (response.statusCode == 200) {
        return Posts.fromJson(jsonDecode(posts));
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
  Posts posts = await asyncCall.fetchPosts();
  posts.toJson().forEach((key, value) {
    print('$key');
  });
}
