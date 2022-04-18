<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/svg+xml" href="https://upload.wikimedia.org/wikipedia/commons/8/8b/Copyleft.svg" integrity="sha384-QdRZ0tuSo1qlFFOiG++qJmg6GK2dmx9wccmXqou4rVwT1szGKkrJXUsr+G8PDaBe" sizes="any">
  <title>PHP Test</title>
</head>
<body>
  <div id="Opg_1">
    <h2>PHP Opgave 1</h2>
    <?php if ($file = fopen('./test.txt', 'r')) {
        while (!feof($file)) {
            $line = fgets($file);
            $line = preg_replace('/([\r\n\t])/', '', $line);
            echo "<p>$line</p><br>";
        }
        fclose($file);
    } ?>
  </div>
  <div id="Opg_2">
    <h2>PHP Opgave 2</h2>
    <a href="/home/yuki/Desktop/index.php&a=2" target="_blank" rel="noopener noreferrer">Test</a>
    <?php
    $str = $_GET['a'] ?? 'not set';
    echo '<p>' . '$a is ' . $str . '</p>' . PHP_EOL;
    ?>
  </div>
  <div id="Opg_3">
    <h2>PHP Opgave 3</h2>
    <h3>PHP Opgave 3.1</h3>
    <?php
    function tagIt($tag, $content)
    {
        return "<$tag>$content</$tag>" . PHP_EOL;
    }
    const HELLO = 'hello World';
    echo tagIt('p', $HELLO);
    ?>
    <h3>PHP Opgave 3.2</h3>
    <?php
    function tagIt2($tag, $content)
    {
        $args_num = func_num_args();
        if ($args_num > 2) {
            $pre = "<$tag";
            for ($i = 2; $i < $args_num; $i+=2) {
                $pre .=
                    ' ' . func_get_arg($i) . '="' . func_get_arg($i+1) . '"';
            }
            $pre .= '>';
        }
        $post = "</$tag>";
        return "$pre$content$post" . PHP_EOL;
    }
    echo tagIt2('p', $HELLO, 'class', 'fancy', 'id', 'test');
    ?>
    <h3>PHP Opgave 3.3</h3>
    <?php
    function charAt($s, &$i)
    {
        $_char = substr($s, $i - 1, 1);
        $i++;
        return $_char;
    }
    $test = 5;
    echo charAt($HELLO, $test) . $test . '<br>' . PHP_EOL;
    ?>
  </div>
  <div id="Opg_4">
    <h2>PHP Opgave 4</h2>
    <h3>PHP Opgave 4.1</h3>
    <?php
    function getMomsBeregner($moms) {
      return fn($excl) => ($moms++) * $excl;
    }
    $ex = 100;
    $testFunc = getMomsBeregner(0.25);
    echo "<p>Exkl. moms: $ex<br>Inkl. moms: " . $testFunc($ex) . '</p><br>' . PHP_EOL;
    ?>
    <h3>PHP Opgave 4.2</h3>
    <?php
    function functionCaller($f, $x, $y) {
      return $f($x, $y);
    }
    echo functionCaller('tagIt', 'p', 'test') . '<br>' . PHP_EOL;
    ?>
  </div>
  <div id="Opg_5">
    <h2>PHP Opgave 5</h2>
    <?php
    class Studerende {
      private int $id;
      private string $navn;
      private int $semester;

      function __construct(int $id) {
        $this->id = $id;
      }

      function setNavn(string $navn) {
        $this->navn = $navn;
      }

      function setSemester(int $semester) {
        $this->semester = $semester;
      }

      function toString() {
        return "{id: $this->id, navn: $this->navn, semester: $this->semester}";
      }
    }
    $test5 = new Studerende(1);
    $test5->setNavn('Emil');
    $test5->setSemester(4);
    echo $test5->toString() . PHP_EOL;
    ?>
  </div>
</body>
</html>
