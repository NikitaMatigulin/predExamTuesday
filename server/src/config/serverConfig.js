require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const removeHTTPHeader = require("../middleware/removeHeader"); // Кастомная мидлварка

const serverConfig = (app) => {
  // Middleware для логирования запросов
  app.use(morgan("dev")); // Логирование должно быть первым

  // Middleware для парсинга URL-encoded и JSON-данных
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Middleware для работы с cookies
  app.use(cookieParser());

  // Middleware для CORS (добавлен вызов функции)
  app.use(cors()); // Исправлено: добавлен вызов функции

  // Кастомная middleware для удаления заголовков
  app.use(removeHTTPHeader);

  // Middleware для статических файлов
  app.use(
    "/static/images",
    express.static(path.resolve(__dirname, "..", "public", "images"))
  );
};

module.exports = serverConfig;
