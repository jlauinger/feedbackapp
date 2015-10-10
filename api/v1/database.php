<?php

/**
 * database.php
 * definiert die Datenbankklasse, die PDO erweitert und die Zugangsdaten zur Verfügung stellt
 */

class Database extends PDO {

  /**
   * Konstruktor: erweitert PDO mit Zugangsdaten und sorgt für die Verwendung von UTF-8
   */
  function Database() {
    /**
     * ZUGANGSDATEN HIER KONFIGURIEREN:
     */
    $db_host = 'localhost';
    $db_database = 'feedback';
    $db_user = 'feedback';
    $db_password = 'changeme1';

    parent::__construct(
            'mysql:host=' . $db_host .
            ';dbname=' . $db_database .
            ';charset=utf8',
            $db_user,
            $db_password
            );
    $this->exec("SET CHARACTER SET utf8");
  }
};
