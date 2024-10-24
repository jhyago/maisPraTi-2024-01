package com.example.relacionamentos_springBoot.service;

import com.example.relacionamentos_springBoot.model.Cliente;
import com.example.relacionamentos_springBoot.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente salvarClienteComConta(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente buscarCliente(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }
}
