package dev.jihogrammer.blog.ui;

import dev.jihogrammer.blog.utils.IPAddressParser;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TemplateController {
    @GetMapping
    public String landingPage(final HttpServletRequest request, final Model model) {
        model.addAttribute("ip", IPAddressParser.getIPAddress(request));
        return "index";
    }
}
