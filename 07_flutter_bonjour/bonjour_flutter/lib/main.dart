import 'package:flutter/material.dart';

void main() => runApp(const MonApplication());

class MonApplication extends StatelessWidget {
  const MonApplication({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: const Text('Hello, World!'),
            backgroundColor: const Color(0xFFB74093),
          ),
          body: SingleChildScrollView(
              child: Center(
                  child: Column(
            children: [
              const Text('Bonjour',
                  style: TextStyle(
                      fontSize: 40,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFFB74093))),
              const Text('Je suis Ross',
                  style: TextStyle(fontSize: 30, color: Color(0xFFB74093))),
              Image.network(
                'https://media-exp1.licdn.com/dms/image/C5603AQFH5sICrGTD0Q/profile-displayphoto-shrink_800_800/0/1517737002543?e=1660176000&v=beta&t=ddLaGYATyBVKZLyPn1KVvVogU2eJLt2GPsZLstzzAqk',
                height: 350,
              ),
              const BoutonContactezMoi()
            ],
          )))),
    );
  }
}

class BoutonContactezMoi extends StatelessWidget {
  const BoutonContactezMoi({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => showDialog(
          context: context,
          builder: (BuildContext context) {
            return const AlertDialog(
              title: Text('Contactez-moi'),
              content: Text("Je suis joignable à IMT Atlantique"),
            );
          }),
      style: ElevatedButton.styleFrom(primary: const Color(0xFFB74093)),
      child: const Text('Contactez-moi !'),
    );
  }
}
