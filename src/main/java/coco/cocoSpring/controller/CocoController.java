package coco.cocoSpring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CocoController {

    @GetMapping("coco")
    public String coco(Model model){

        model.addAttribute("data", "coco"); //키 값
        return "coco";
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam(value="name" ) String name, Model model){
        model.addAttribute("name", name);
        return "hello-template";
    }

    @GetMapping("hello-string")
    @ResponseBody
    public String helloString(@RequestParam(value="name" ) String name){
        return "hello " + name; //hello + cocos
    }


}
