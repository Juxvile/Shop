package com.project.shop.config;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;


// Этот компонент дает доступ к базе данных по адресу http://localhost:8082/,
// при запуске приложения и добавление элементов в базу данных, можно заходить по этому адресу и отслеживать добавление
@Component
public class DbConfig {

        private org.h2.tools.Server webServer;

        private org.h2.tools.Server tcpServer;

        @EventListener(org.springframework.context.event.ContextRefreshedEvent.class)
        public void start() throws java.sql.SQLException {
            this.webServer = org.h2.tools.Server.createWebServer("-webPort", "8082", "-tcpAllowOthers").start();
            this.tcpServer = org.h2.tools.Server.createTcpServer("-tcpPort", "9092", "-tcpAllowOthers").start();
        }

        @EventListener(org.springframework.context.event.ContextClosedEvent.class)
        public void stop() {
            this.tcpServer.stop();
            this.webServer.stop();
        }

}
